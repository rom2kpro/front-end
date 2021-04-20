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
                                        <label for="name">Tên khách hàng</label>
                                        <input id="name" type="text" class="form-control" v-model="customer.name">
                                    </div>
                                    <!-- End of Form -->
                                    <div class="mb-4">
                                        <label class="my-1 mr-2" for="address">Địa chỉ</label>
                                        <input id="address" type="text" class="form-control" v-model="customer.address">
                                    </div>

                                </div>
                                <div class="col-lg-6 col-sm-12">

                                    <div class="mb-4">
                                        <label for="born">Ngày sinh</label>
                                        <input id="born" type="date" class="form-control" v-model="customer.born">
                                    </div>
                                    <div class="row">
                                        <div class="col-6 mb-04">
                                            <label for="cmnd">CMND</label>
                                            <input id="cmnd" type="text" class="form-control" v-model="customer.cmnd.id">
                                        </div>

                                        <div class="col-6 mb-04">
                                            <label for="date">Ngày cấp</label>
                                            <input id="date" type="date" class="form-control" v-model="customer.cmnd.date">
                                        </div>
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
            customer:{
                name: '',
                cmnd: {
                    id: "",
                    date: ""
                },
                born: '',
                address: "",
            }
        }
    },
}
</script>
