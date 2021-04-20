<template>
    <div>
        <router-link 
            tag="button"
            to="/deposit/create"
            class="btn btn-primary btn-sm mr-2 mb-2"
        >
            <span class="fas fa-plus mr-2"></span>New Deposit
        </router-link>
        <div class="card border-light shadow-sm">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0 rounded">
                        <thead class="thead-light">
                            <tr>
                                <!-- <th class="border-0">Mã KH</th> -->
                                <th class="border-0">Mã phiếu</th>
                                <th class="border-0">Họ và tên</th>
                                <!-- <th class="border-0">All Change</th> -->
                                <th class="border-0">CMND</th>
                                <th class="border-0">Số tiền gửi</th>
                                <th class="border-0">Ngày gửi</th>
                                <th class="border-0">Lãi suất</th>
                                <th class="border-0">Ngày đến hạn</th>
                                <th class="border-0">Edit</th>
                                <th class="border-0">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Item -->
                            <tr>
                                <td class="border-0 font-weight-bold">P01</td>
                                <td class="border-0 font-weight-bold">Nguyen Viet Trung</td>
                                <!-- <td class="border-0 text-danger">
                                    <span class="fas fa-angle-down"></span>
                                    <span class="font-weight-bold">5</span>
                                </td> -->
                                <td class="border-0 font-weight-bold">261561580</td>
                                <td class="border-0 font-weight-bold">
                                    1.000.000
                                </td>
                                <td class="border-0">
                                    20/04/2021
                                </td>
                                <td class="border-0">
                                    3.5%
                                </td>
                                <td class="border-0">
                                    20/07/2021
                                </td>
                                <td class="border-0 d-flex align-item-center">
                                    <router-link 
                                        tag="a"
                                        to="/deposit/edit"
                                        class="text-primary"
                                    >
                                        Edit
                                    </router-link>
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