<template>
    <div class="container-fluid bg-soft">
        <div class="row">
            <div class="col-12">
                <Sidebar/>
                <main class="content">
                    <Header/>
                        <router-view></router-view>
                    <Footer/>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
// import Login from './components/login'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Sidebar from './shared/Sidebar'

export default {
    name: 'App',
    components: {
        // Login
        Header,
        Footer,
        Sidebar,
    }
}
</script>