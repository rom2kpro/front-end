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
                                        <label class="my-1 mr-2" for="manv">Mã NV</label>
                                        <input id="manv" type="text" class="form-control" v-model="staff.manv">
                                    </div>

                                    <div class="mb-4">
                                        <label for="name">Tên nhân viên</label>
                                        <input id="name" type="text" class="form-control" v-model="staff.name">
                                    </div>
                                    <!-- End of Form -->

                                </div>
                                <div class="col-lg-6 col-sm-12">

                                    <div class="mb-4">
                                        <label for="address">Địa chỉ</label>
                                        <input id="address" type="text" class="form-control" v-model="staff.address">
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="macn">Mã CN</label>
                                        <input id="macn" type="text" class="form-control" v-model="staff.macn">
                                    </div>
                                    <!-- Form -->
                                    <!-- End of Form -->
                                </div>

                                <div class="col-lg-6 col-sm-12">

                                    <div class="mb-4">
                                        <label for="username">Username</label>
                                        <input id="username" type="text" class="form-control" v-model="staff.username">
                                    </div>
                                    
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="password">Password</label>
                                        <input id="password" type="text" class="form-control" v-model="staff.password">
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
