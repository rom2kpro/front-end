<template>
    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
        <div class="sidebar-inner px-4 pt-3">
            <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                <div class="d-flex align-items-center">
                <div class="user-avatar lg-avatar mr-4">
                    <img src="" class="card-img-top rounded-circle border-white" alt="Bonnie Green">
                </div>
                <div class="d-block">
                    <h2 class="h6">Hi, Jane</h2>
                    <a href="../../pages/examples/sign-in.html" class="btn btn-secondary text-dark btn-xs"><span class="mr-2"><span class="fas fa-sign-out-alt"></span></span>Sign Out</a>
                </div>
                </div>
                <div class="collapse-close d-md-none">
                    <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                        data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                        aria-label="Toggle navigation"></a>
                </div>
            </div>
            <ul class="nav flex-column">
                <router-link
                    to="/dashboard"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                <div class="nav-link">
                    <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
                    <span>Overview</span>
                </div>
                </router-link>
                <router-link
                    to="/customer/list"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                    <div class="nav-link">
                        <span class="sidebar-icon"><span class="fas fa-users"></span></span>
                        <span>Customer</span>
                    </div>
                </router-link>
                <router-link
                    to="/staff/list"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                    <div class="nav-link">
                        <span class="sidebar-icon"><span class="fas fa-users-cog"></span></span>
                        <span>Staff</span>
                    </div>
                </router-link>
                <router-link
                    to="/deposit/list"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                    <div class="nav-link">
                        <span class="sidebar-icon"><span class="fas fa-credit-card"></span></span>
                        <span>Deposit</span>
                    </div>
                </router-link>
                <router-link
                    to="/withdraw"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                    <div class="nav-link">
                        <span class="sidebar-icon"><span class="fas fa-money-bill-alt"></span></span>
                        <span>Withdraw</span>
                    </div>
                </router-link>
                <router-link
                    to="/withdraw"
                    tag="li"
                    class="nav-item"
                    active-class="active"
                    exact
                >   
                    <div class="nav-link">
                        <span class="sidebar-icon"><span class="fas fa-chart-line"></span></span>
                        <span>Service</span>
                    </div>
                </router-link>
                <!-- <li class="nav-item ">
                <a href="../../pages/transactions.html" class="nav-link">
                    <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
                    <span>Transactions</span>
                </a>
                </li>
                <li class="nav-item ">
                <a href="../../pages/settings.html" class="nav-link">
                    <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
                    <span>Settings</span>
                </a>
                </li>
                <li class="nav-item">
                    <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-app">
                        <span>
                        <span class="sidebar-icon"><span class="fas fa-table"></span></span> 
                            Products
                        </span>
                        <span class="link-arrow"><span class="fas fa-chevron-right"></span></span> 
                    </span>
                    <div class="multi-level collapse " role="list" id="submenu-app" aria-expanded="false">
                        <ul class="flex-column nav">
                            <router-link
                                to="/product" 
                                class="nav-item"
                                active-class="active"
                                exact
                            >
                                <div class="nav-link">
                                    <span>Product</span>
                                </div>
                            </router-link>
                        </ul>
                        <ul class="flex-column nav">
                            <router-link
                                to="/product/create" 
                                class="nav-item"
                                active-class="active"
                            >
                                <div class="nav-link">
                                    <span>Create Product</span>
                                </div>
                            </router-link>
                        </ul> -->
                    <!-- </div>
                </li>
                <li class="nav-item">
                <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-pages">
                    <span>
                    <span class="sidebar-icon"><span class="far fa-file-alt"></span></span> 
                    Page examples
                    </span>
                    <span class="link-arrow"><span class="fas fa-chevron-right"></span></span> 
                </span>
                <div class="multi-level collapse " role="list" id="submenu-pages" aria-expanded="false">
                    <ul class="flex-column nav">
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/sign-in.html"><span>Sign In</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/sign-up.html"><span>Sign Up</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/forgot-password.html"><span>Forgot password</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/reset-password.html"><span>Reset password</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/lock.html"><span>Lock</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/404.html"><span>404 Not Found</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="../../pages/examples/500.html"><span>500 Server Error</span></a></li>
                    </ul>
                </div>
                </li>
                <li class="nav-item">
                <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-components">
                    <span>
                    <span class="sidebar-icon"><span class="fas fa-box-open"></span></span> 
                        Components
                    </span>
                    <span class="link-arrow"><span class="fas fa-chevron-right"></span></span> 
                </span>
                <div class="multi-level collapse " role="list" id="submenu-components" aria-expanded="false">
                    <ul class="flex-column nav">
                        <li class="nav-item "><a class="nav-link" href="../../pages/components/buttons.html"><span>Buttons</span></a></li>
                        <li class="nav-item "><a class="nav-link" href="../../pages/components/notifications.html"><span>Notifications</span></a></li>
                        <li class="nav-item "><a class="nav-link" href="../../pages/components/forms.html"><span>Forms</span></a></li>
                        <li class="nav-item "><a class="nav-link" href="../../pages/components/modals.html"><span>Modals</span></a></li>
                        <li class="nav-item "><a class="nav-link" href="../../pages/components/typography.html"><span>Typography</span></a></li>
                    </ul>
                </div>
                </li>
                <li role="separator" class="dropdown-divider mt-4 mb-3 border-black"></li> -->
            </ul>
        </div>
    </nav>
</template>