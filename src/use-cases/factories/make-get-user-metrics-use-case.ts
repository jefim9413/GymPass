import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetMetricsUseCase } from '../get-user-metrics'
export function makeGetUserMetricsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetMetricsUseCase(checkInsRepository)

  return useCase
}
