class FrontRoutes {
    start(){
        return `/`
    }
    signup(){
        return `/signup`
    }
    siginin(){
        return '/signin'
    }
    user(){
        return `/user`
    }
}

const frontRoutes = new FrontRoutes();

export default frontRoutes;