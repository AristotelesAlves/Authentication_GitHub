import axios from "axios"
import prismaClient from "../prisma";

interface IAccessTokenResponse{
    access_token: string
}


class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url,null,{
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers:{
                "Accept": "application/json"
            }
        });

        const response = await axios.get("https://api.github.com/user", {
        headers: {
            authorization: `Bearer ${accessTokenResponse.access_token}`
        }
    })

    const { login, id, avatar_url, name } = response.data

    let user = await prismaClient.user.findFirst({
        where: {
            github_id: id
        }
    })

    const MessageUser = user ? 'User Cadastrado DB' : 'Novo User cadastado no DB!'

    if (!user){
        try {
            await prismaClient.user.create({
                data: {
                    github_id: id,
                    login,
                    avatar_url,
                    name,
                }
            })
            return user
        } catch (error) {
            return error.message 
        }
    }

    return ({user, MessageUser});

    }
    
}

export { AuthenticateUserService }