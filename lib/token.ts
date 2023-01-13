import Cookies from 'js-cookie'

export const TOKEN_KEY = 'access_token'

class Token {
  public get(key: string): string | null {
    return Cookies.get(key) || null
  }

  public save(key: string, token: string, expires: number): void {
    Cookies.set(key, token, { expires })
  }

  public clear(key: string): void {
    Cookies.remove(key)
  }
}

export default new Token()
