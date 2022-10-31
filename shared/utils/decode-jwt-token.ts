import jwtDecode, { JwtPayload } from 'jwt-decode';

export function decodeJwtToken(token: string): ExtendedJwtPayload | null {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export interface ExtendedJwtPayload extends JwtPayload {
  exp: number
  iat: number
  sc: string
  id: number
  email: string,
}
