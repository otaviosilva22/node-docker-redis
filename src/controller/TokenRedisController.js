const client = require("../database/connection");
const {authorization_keys} = require('../common/constants.js')

class TokenRedisController{
    async getToken(req, res){
        try{
                
            let result = await client.get("token");
            let refresh_token = false;
            
            if (!result || result == null){
                await client.set("token", authorization_keys.token);
                result = await client.get("token");                
                refresh_token = true;
            }
            
            
            return res.status(200).json({
                result,
                refresh_token
            });
            
        }catch(e){
            return res.status(500).json({
                error: 'Error to connect in Redis'
            });
        }
    }
}

module.exports = TokenRedisController;