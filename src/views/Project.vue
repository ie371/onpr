<template>



<form method="post" target="_blank" enctype="multipart/form-data" 
onkeypress="if(event.keyCode == 13) return false;" >



<section class="content container-fluid ">

<div class="row">
    <div class="col-lg-12 col-md-12">
        <div class="nav-tabs-custom">
            <nav class="nav nav-tabs justify-content-between">
                <div class="btn-group" role="group" aria-label="First group">
                            <a class="nav-item nav-link" :class="{active : currentTab === 1}"  @click="currentTab = 1" href="#tab_1">Реквизиты</a>
                            <a class="nav-item nav-link" :class="{active : currentTab === 2}"  @click="currentTab = 2" href="#tab_2">Параметры</a>
                           <a class="nav-item nav-link" :class="{active : currentTab === 3}"  @click="currentTab = 3" href="#tab_2">HELP</a>
                </div>
            </nav>
            <div class="tab-content">
                <div class="tab-pane" :class="{active : currentTab === 1}">

                                    <rekvizit></rekvizit>
                                    
                </div>
                <div class="tab-pane" :class="{active : currentTab === 2}" >
                    <div class="form-row">
                        <div class='col-md-12'>

                                    <paramC></paramC>

                        </div>
                    </div>
                </div>

                <div class="tab-pane" :class="{active : currentTab === 3}" >
                    <div class="form-row">
                        <div class='col-md-12'>

                                    <help></help>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</div>
</section>
</form>
</template>

<script>
    import rekvizit from '../components/rekvizit.vue';
    import paramC from '../components/paramC.vue';
    import help from '../components/help.vue';
    // import kpField from '../components/kpField.vue';

    export default {

    components: {
                rekvizit: rekvizit,
                paramC: paramC,
                help:help
                // kpField:kpField,
                },
    data() {
        return{
            currentTab: 2,
            }
        },

    }
</script>
