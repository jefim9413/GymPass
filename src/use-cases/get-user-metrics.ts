import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetMetricsUseCaseRequest {
  userId: string
}
interface GetMetricsUseCaseResponse {
  checkInsCount: number
}
export class GetMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetMetricsUseCaseRequest): Promise<GetMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
