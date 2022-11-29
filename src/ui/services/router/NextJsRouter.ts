import { Router } from '@/ui/services/router/Router'
import singletonRouter from 'next/router'

export class NextJsRouter implements Router {
    navigate(route: string) {
        singletonRouter.router.push(route);
    }
}
