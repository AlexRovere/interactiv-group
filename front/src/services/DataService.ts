import http from '@/http-common'

class DataService {
  getAll(): Promise<any> {
    return http.get('/movies')
  }

  get(id: any): Promise<any> {
    return http.get(`/movies/${id}`)
  }

  create(data: any): Promise<any> {
    return http.post('/movies', data)
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/movies/${id}`, data)
  }

  delete(id: any): Promise<any> {
    return http.delete(`/movies/${id}`)
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/movies?title=${title}`)
  }
}

export default new DataService()
