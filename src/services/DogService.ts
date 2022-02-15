import BasicService from './HttpServices'
import { IDogApi } from '@/interfaces/DogApiInterface'

class DogService extends BasicService {
  constructor() {
    super(process.env.VITE_DOG_DOMAIN as string)
  }

  public async getDog(): Promise<IDogApi> {
    return (await this.connection.get<IDogApi>('/random')).data
  }
}

export default DogService
