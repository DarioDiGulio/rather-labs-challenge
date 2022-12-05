import { Query } from 'asimov-cqbus/dist/requests/Query'

export class GetQuizzesIds extends Query<GetQuizzesIdsResponse> {}

export interface GetQuizzesIdsResponse {
    ids: string[]
}