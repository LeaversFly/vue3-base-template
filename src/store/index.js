import useRouteStore from './modules/route'

export default function useStore() {
    return {
        routeStore: useRouteStore(),
    }
}