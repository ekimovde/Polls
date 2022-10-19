import jwtDecode, { JwtPayload } from 'jwt-decode';

export function decodeJwtToken(token: string): ExtendedJwtPayload | null {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
}

export interface ExtendedJwtPayload extends JwtPayload {
  exp: number,
  iat: number,
  sc: string,
  userId: string,
  userGroup: string,
  userLogin: string,
  userEmail: string,
  userName: string,
}
