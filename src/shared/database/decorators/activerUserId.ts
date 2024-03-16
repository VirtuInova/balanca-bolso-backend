import { ExecutionContext, UnauthorizedException, createParamDecorator } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';


export const ActiveUserId = createParamDecorator<undefined>((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const sessToken  = request.headers.authorization;
  const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;
  
  if (!sessToken ) {  
    throw new UnauthorizedException("Usuário não logado");
  }

  const token = sessToken .split(' ')[1];
  
  try{
     const decoded = jwt.verify(token, publicKey)
     return decoded.sub ;
  }catch(error){
    throw new UnauthorizedException("Token Inválido");

  }
});