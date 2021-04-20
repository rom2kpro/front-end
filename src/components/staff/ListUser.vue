<template>
    <div>
        <router-link 
            tag="button"
            to="/staff/create"
            class="btn btn-primary btn-sm mr-2 mb-2"
        >
            <span class="fas fa-plus mr-2"></span>New Staff
        </router-link>
        <div class="card border-light shadow-sm">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0 rounded">
                        <thead class="thead-light">
                            <tr>
                                <!-- <th class="border-0">Mã KH</th> -->
                                <th class="border-0">Mã NV</th>
                                <th class="border-0">Họ và tên</th>
                                <!-- <th class="border-0">All Change</th> -->
                                <th class="border-0">Địa chỉ</th>
                                <th class="border-0">Mã CN</th>
                                <th class="border-0">Edit</th>
                                <th class="border-0">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Item -->
                            <tr>
                                <td class="border-0 font-weight-bold">NV01</td>
                                <td class="border-0 font-weight-bold">Nguyen Viet Trung</td>
                                <!-- <td class="border-0 text-danger">
                                    <span class="fas fa-angle-down"></span>
                                    <span class="font-weight-bold">5</span>
                                </td> -->
                                <td class="border-0 font-weight-bold">
                                    ĐH TDT
                                </td>
                                <td class="border-0">
                                    CN01
                                </td>
                                <td class="border-0 d-flex align-item-center">
                                    <a href="" class="text-primary">Edit</a>
                                </td>
                                <td class="border-0">
                                    <a href="" class="text-danger">Delete</a>
                                </td>
                            </tr>
                            <!-- End of Item -->
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>