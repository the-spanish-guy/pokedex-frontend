import BasicService from './HttpServices'
import { ICatApi } from '@/interfaces/CatApiInterface'

class CatService extends BasicService {
  constructor() {
    super(process.env.VITE_CAT_DOMAIN as string)
  }

  public async getCat(): Promise<ICatApi[]> {
    return (await this.connection.get<ICatApi[]>('/search')).data
  }
}

export default CatService
