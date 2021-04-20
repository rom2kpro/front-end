<template>
    <div>
        
        <div class="row">
            <div class="col-12 mb-4">
                <div class="card border-light shadow-sm components-section">
                    <form action="">
                        <div class="card-body">     
                            <div class="row mb-4">
                                <div class="col-lg-6 col-sm-12">
                                    <!-- Form -->
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="manv">Mã Phiếu</label>
                                        <input id="mabill" type="text" class="form-control" v-model="staff.manv">
                                    </div>

                                    <div class="mb-4">
                                        <label for="cmnd">CMND</label>
                                        <input id="cmnd" type="text" class="form-control" v-model="staff.name">
                                    </div>

                                    <div class="mb-4">
                                        <label for="name">Tên khách hàng</label>
                                        <input id="name" type="text" class="form-control" v-model="staff.name">
                                    </div>

                                    <div class="mb-4">
                                        <label for="address">Địa chỉ</label>
                                        <input id="address" type="text" class="form-control" v-model="staff.name">
                                    </div>

                                    <div class="mb-4">
                                        <label for="born">Ngày sinh</label>
                                        <input id="born" type="date" class="form-control" v-model="staff.name">
                                    </div>
                                    <!-- End of Form -->

                                </div>
                                <div class="col-lg-6 col-sm-12">

                                    <div class="mb-4">
                                        <label for="datestart">Ngày gửi</label>
                                        <input id="datestart" type="date" class="form-control" v-model="staff.address">
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="money">Số tiền gửi</label>
                                        <input id="money" type="text" class="form-control" v-model="staff.macn">
                                    </div>

                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="country">Mã dịch vụ</label>
                                        <select class="form-select" id="country" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="namedv">Tên dịch vụ</label>
                                        <input id="namedv" type="text" class="form-control" v-model="staff.macn">
                                    </div>

                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="lai">Lãi suất</label>
                                        <input id="lai" type="text" class="form-control" v-model="staff.macn">
                                    </div>

                                    <div class="mb-4">
                                        <label for="datestart">Ngày đến hạn</label>
                                        <input id="datestart" type="date" class="form-control" v-model="staff.address">
                                    </div>

                                    <!-- Form -->
                                    <!-- End of Form -->
                                </div>
                            </div>
                        </div>
                        <div class="col-3 ml-auto mr-4">
                            <button class="btn btn-primary col-12 mb-4" type="button" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return{
            staff:{
                manv: '',
                name: '',
                macn: '',
                address: '',
                username: '',
                password: '',
            }
        }
    },
}
</script>
