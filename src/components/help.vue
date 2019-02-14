<template>
    <div class="form-row">

        <!-- // ************************************************** -->
        <div class='col-md-3'>

            <div class="text-center">
                <h5><span class="badge">Общие параметры </span></h5>
            </div>

            <div class="form-group">
                <!-- <div class='form-row'> -->
                <div class='col'>
                    <h6><span class="badge"> Системный блок</span></h6>
                    <select class='form-control form-control-sm'>
                        <option value='0'>СБ-04 с блоком бесперебойного питания</option>
                        <option value='1'>СБ-04 с сетевым питанием</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <div class='col'>
                    <h6><span class="badge">Платы расширения</span></h6>
                    <multiselect :options="options" :multiple="true" track-by="lib" :custom-label="customLabel"
                        placeholder="Платы расширения" :option-height="34">
                    </multiselect>
                </div>
            </div>

            <div class="form-group">
                <div class='col'>
                    <h6><span class="badge">Длина кабельных проводок</span></h6>
                    <div class='form-row'>

                        <div class='col'>
                            <label class='col-form-label'>ВРУ => СБ</label>
                            <input type='text' class='form-control form-control-sm'>

                        </div>
                        <div class='col'>
                            <label class='col-form-label'>СБ => ИМ ЦО</label>
                            <input type='text' class='form-control form-control-sm'>

                        </div>
                        <div class='col'>
                            <label class='col-form-label'>СБ => ИМ ГВС</label>
                            <input type='text' class='form-control form-control-sm'>

                        </div>
                    </div>
                </div>
            </div>


            <div class="form-group">
                <div class='col'>

                    <h6><span class="badge">Климатология</span></h6>
                    <div class="form-row">

                        <div class='col'>
                            <label class='col-form-label'>Республика, край, область :</label>
                            <select class='form-control form-control-sm' >
                                <option v-for="region in regions" v-bind:value="region.value" :key="region.key">
                                    {{ region.text }}
                                </option>
                            </select>
                        </div>

                        <div class='col'>
                            <label class='col-form-label'>Населенный пункт:</label>
                            <select class='form-control form-control-sm' >
                                <option v-for="mes in isx.mess" :key="mes.key">
                                    {{ mes.item}}
                                </option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>



            <div class="form-group">
                    <div class='col'>
                        <h6><span class="badge">Вставка внешних файлов</span></h6>
                        <div class="form-row">
                            <div class='col'>
                                <label class='col-form-label'>Принципиальная схема</label>
                                <input type="file" style="font-size:0.8em;" >
                            </div>
                            <div class='col'>
                                    <label class='col-form-label'>Формат листа:</label>
                                    <select class='form-control form-control-sm'>
                                    <option value='A3'>А3</option>
                                    <option value='A2'>А2</option>
                                    </select> 
                            </div>    
                        </div>
                        <div class="form-row">
                            <div class='col'>
                                <label class='col-form-label'>Ситуационный план</label>
                                <input type="file" style="font-size:0.8em;">
                            </div>
                            <div class='col'>
                                    <label class='col-form-label'>Формат листа:</label>
                                    <select class='form-control form-control-sm'>
                                    <option value='A3'>А3</option>
                                    <option value='A2'>А2</option>
                                    </select> 
                            </div>    
                        </div>
                    </div>
            </div>

        </div>




        <!-- // ************************************************** -->

        <div class='col-md-3 px-3 border-left border-warning'>

            <div class="text-center">
                <h5><span class="badge"> {{info}} </span></h5>
            </div>

            <div class='form-group'>

                <div class="form-row">
                    <div class='col'>
                        <label class='col-form-label'>Qco, Гкал/ч</label>
                        <input type='number' class='form-control form-control-sm' placeholder='Qцо' 
                            step='0.0000001' oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="8">
                    </div>

                     <div class='col-md-5'>
                        <label class='col-form-label'>Схема теплопотребления</label>
                        <select class='form-control form-control-sm'>
                            <option value='0'>закрытая</option>
                            <option value='1'>открытая</option>
                            <option value='2'>открытая ГВС цирк без УУ</option>
                            <option value='3'>открытая ГВС тупик без УУ</option>
                        </select>
                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Формула учета</label>
                        <select class='form-control form-control-sm' >
                            <option value='0'>закрытая (М1 = М2)</option>
                            <option value='1'>открытая (М1 - М2)</option>

                        </select>
                    </div>

                </div>

                <div class="form-row">
                    <div class='col'>
                        <label class='col-form-label'>Тип изм. линии</label>
                        <select class='form-control form-control-sm'>
                            <option value='kl'>Классическая</option>
                            <option value='ml'>Модифицированная</option>
                        </select>
                        
                    </div>
                    <div class='col'>
                        <label class='col-form-label'>Фильтр</label>
                        <select class='form-control form-control-sm' >
                            <option value='0'>без фильтра</option>
                            <option value='1'>сетчатый фильтр</option>
                            <option value='2'>грязевик</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class='col'>
                        <label class='col-form-label'>Схема присоединения</label>
                        <select class='form-control form-control-sm'>
                            <option value='0'>зависимая</option>
                            <option value='1'>независимая (с подпиткой)</option>
                        </select>
                    </div>
                    <div class='col' v-if="+isx.sx_ot">
                        <label class='col-form-label'>Фильтр подпитки</label>
                        <select class='form-control form-control-sm'>
                            <option value='0'>без фильтра</option>
                            <option value='1'>сетчатый фильтр</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class='form-group'>
                <div class="form-row mb-1">
                    <div class='col'>
                        <label class='col-form-label'></label>
                    </div>
                    <div class='col text-maroon text-s'>
                        Подача Т1
                    </div>
                    <div class='col text-blue text-s'>
                        Обратка Т2
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Tемп график, °C</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='T1' >
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='T2' >
                    </div>
                </div>
                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Давление, мвст</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='50'>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='40' >
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Расход, м³/ч</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm'
                            step='0.001' oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="5">
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' disabled>

                    </div>

                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Ду прибора</label>
                    </div>

                    <div class='col'>
                        <select class='form-control form-control-sm' >
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class='col'>
                        <input type='text' class='form-control form-control-sm'  disabled>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Скорость, м/с</label>
                    </div>
                    <div class='col'>
                        <input type='text' class='form-control form-control-sm'
                            readonly>
                       



                    </div>
                    <div class='col'>
                        <input type='text' class='form-control form-control-sm'  disabled>
                    </div>
                </div>

                <div class="form-row mb-2">

                    <div class='col'>
                        <label class='col-form-label'>ИМ отопление</label>
                    </div>
                    <div class='col'>
                        <select class='form-control form-control-sm' >
                            <option value='6'>И6</option>
                            <option value='5'>К5</option>
                        </select>


                        
                    </div>


                    <div class='col'>
                        <input type='text' class='form-control form-control-sm'  disabled>
                    </div>
                </div>
                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Ду тр-дов Т1/Т2</label>
                    </div>

                    <div class='col'>
                        <select class='form-control form-control-sm' >
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' disabled>

                    </div>
                </div>
                <div class="form-row mb-2">

                    <div class='form-row mb-1'>
                        <label class='col-form-label'>Подпитка:</label>
                    </div>

                    <div class='form-row mb-1'>
                        <div class='col'>
                            <label class='col-form-label'>Расх.,м³/ч</label>
                            <input type='number' class='form-control form-control-sm' 
                                readonly step='0.001' oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                maxlength="5">
                        </div>

                        <div class='col'>
                            <label class='col-form-label'>Ду ИМ</label>
                            <select class='form-control form-control-sm' >
                                <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                        <div class='col'>
                            <label class='col-form-label'>Скорость</label>
                            <input type='text' class='form-control form-control-sm'
                                id='V9' readonly>
                        </div>
                    
                        <div class='col'>
                            <label class='col-form-label'>Ду Т94</label>
                            <select class='form-control form-control-sm'>
                                <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>


        </div>

        <div class='col-md-3 px-3 border-left border-warning'>

            <div class="text-center">
                <h5><span class="badge"> {{infg}} </span></h5>
            </div>

            <div class='form-group'>

                <div class="form-row">
                    <div class='col-md-3'>
                        <label class='col-form-label'>Qmax, Гкал/ч</label>
                        <input type='number' class='form-control form-control-sm' placeholder='Qmax' step='0.0000001'
                             oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="8" >
                    </div>

                    <div class='col-md-3'>
                        <label class='col-form-label'>Qсред, Гкал/ч</label>
                        <input type='number' class='form-control form-control-sm' placeholder='Qср' step='0.0000001'
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="8" >

                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Схема теплопотребления</label>
                        <select class='form-control form-control-sm'>
                            <option value=0>открытая</option>
                            <option value=1>закрытая 1 ступ</option>
                            <option value=2>закрытая 2-х ступ</option>
                        </select>
                    </div>

                </div>

                <div class="form-row">
                    <div class='col'>
                        <label class='col-form-label'>Тип изм. линии</label>
                        <select class='form-control form-control-sm'  >
                            <option value='kl'>Классическая</option>
                            <option value='ml'>Модифицированная</option>
                        </select>
                        
                    </div>
                    <div class='col'>
                        <label class='col-form-label'>Фильтр</label>
                        <select class='form-control form-control-sm'>
                            <option value='0'>без фильтра</option>
                            <option value='1'>сетчатый фильтр</option>
                            <option value='2'>грязевик</option>
                        </select>
                    </div>
                </div>


                <div class="form-row">


                    <div class='col'>
                        <label class='col-form-label'>Кчн</label>
                        <input type='number' class='form-control form-control-sm' placeholder='Кчн' step='0.1'                             
                             oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="4">
                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Тхвл</label>
                        <input type='text' class='form-control form-control-sm' value='15'>
                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Тхвз</label>
                        <input type='text' class='form-control form-control-sm'>
                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Кнп</label>
                        <input type='number' class='form-control form-control-sm' step='0.01'
                         oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="4">
                    </div>

                    <div class='col'>
                        <label class='col-form-label'>Ктп</label>
                        <input type='number' class='form-control form-control-sm' step='0.01' 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="4">

                    </div>
                    <div class='col'>
                        <label class='col-form-label'>&beta;</label>
                        <input type='number' class='form-control form-control-sm' step='0.01' 
                         oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="4">
                    </div>
                    
                </div>

            </div>

            <div class='form-group'>

                <div class="form-row mb-2">

                    <div class='col'>     
                        <label class='col-form-label'></label>
                    </div>

                    <div class='col text-maroon text-s'>
                        Подача Т3
                    </div>
                    <div class='col text-blue text-s'>
                        Обратка Т4
                    </div>




                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Tемп график, °C</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='T3'>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='T4'>
                    </div>
                </div>
                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Давление, мвст</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='50'>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' placeholder='40'>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Расход, м³/ч</label>
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm'
                            step='0.001' oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            maxlength="5" >
                    </div>
                    <div class='col'>
                        <input type='number' class='form-control form-control-sm' disabled>

                    </div>

                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Ду прибора</label>
                    </div>

                    <div class='col'>
                        <select class='form-control form-control-sm' >
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index" >
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                    <div class='col'>
                        <select class='form-control form-control-sm'>
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Скорость, м/с</label>
                    </div>
                    <div class='col'>
                        <input type='text' class='form-control form-control-sm' readonly>
                    </div>
                    <div class='col'>
                        <input type='text' class='form-control form-control-sm' readonly>
                    </div>
                </div>

                <div class="form-row mb-2">

                    <div class='col'>
                        <label class='col-form-label'>ИМ ГВС</label>
                    </div>
                    <div class='col'>
                        <select class='form-control form-control-sm' >
                            <option value='6'>И6</option>
                            <option value='5'>К5</option>
                        </select>
                    </div>
                    <div class='col'>
                        <select class='form-control form-control-sm'>
                            <option value='6'>И6</option>
                            <option value='5'>К5</option>
                        </select>
                    </div>
                </div>
                <div class="form-row mb-2">
                    <div class='col'>
                        <label class='col-form-label'>Ду тр-дов Т3/Т4</label>
                    </div>

                    <div class='col'>
                        <select class='form-control form-control-sm'>
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                        </select>
                    </div>

                    <div class='col'>
                        <select class='form-control form-control-sm'>
                            <option v-for="(option, index) in optionso" v-bind:value="option.value" :key="index">
                                {{ option.text }}
                            </option>
                        </select>

                    </div>
                </div>

            </div>


        </div>

        <!-- // ************************************************** -->

        <div class='col-md-3 px-3 border-left border-warning'>

            <div class="text-center">
                <h5><span class="badge"> Принципиальная схема </span></h5>
            </div>

            <div class='form-group'>
                <b-row>
                    <div class='col-md-12'>

                        <!-- <img id="sximageog" v-bind:src="imgsx.sx" width=100% @click="showModal" style="cursor: pointer;"> -->
                        <!-- <b-modal ref="myModalRef" hide-footer title="Принципиальная схема узла учета" size="lg">
                            <div class="d-block text-center">
                                <img id="sximageog" v-bind:src="imgsx.sx" width=100%>
                            </div>
                            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Закрыть</b-btn>
                        </b-modal> -->
                    </div>
                </b-row>
            </div>
            <div class='form-group'>
                <b-row>
                    <div class='col-md-12' style="font-size:0.7em;">

                    <!-- Основное оборудование - {{plats.length+1}}<br>
                    Узел учета ЦО:
                    <ul id="example-1">
                        <li v-for="(item, index) in pozOt.arSpOt" :key="index">
                            поз. - {{ item }} - {{index}} 
                           
                        </li>
                        </ul>
                        Узел учета ГВС:
                    <ul id="example-1">
                        <li v-for="(item, index) in pozOt.arSpGvs" :key="index">
                            поз. - {{ item }} - {{index}} 
                           
                        </li>
                    </ul> -->
                    <!-- <ul id="example-1">
                        <li v-for="(item, index) in rescalc.OT" :key="index">
                            {{ item }} - {{index}} 
                           
                        </li>
                    </ul> -->
                    
                    <!-- <ul id="example-2">
                        <li v-for="(item, index) in rescalc.Ggvs" :key="index">
                             {{index}}: {{ item }}
                           
                        </li>
                    </ul> -->
                        
                    </div>
                </b-row>
            </div>

            <div class='d-flex justify-content-center'>

                <div class='col-md-9'>

                    <b-btn disabled class="btn btn-sm btn-block mb-3">
                        Создать КП
                    </b-btn>

                    <!-- <b-btn v-b-modal.modallg variant="warning" class="btn btn-sm btn-block mb-3">Текст КП</b-btn> -->

                    <b-btn  disabled>
                        Создать проект
                        <!-- <b-badge variant="light">{{imgsx.zz}}</b-badge> -->
                    </b-btn>


                    <!-- <b-btn 
                        type='submit' variant="primary" formaction='./pdf/project/test.php'
                        class="btn btn-sm btn-block mb-3"
                        @click="axio"                       
                        >
                       test JSON 
                        
                        </b-btn> -->

<!-- 

                    <b-modal id="modallg" size="lg" title="Редактируемые поля коммерческого предложения" v-model="show">
                        <div class="container-fluid">
                            <div class='col'>

                                <div class="form-group">
                                    <label for="tkp">Шапка КП</label>
                                    <textarea class="form-control" id="tkp" name="tkp" rows="4" v-model="top"></textarea>
                                </div>

                                <div class="form-group">
                                    <label for="bkp">Низ КП</label>
                                    <textarea class="form-control" id="bkp" name="bkp" rows="4" v-model="bottom"></textarea>
                                </div>

                            </div>
                        </div>

                        <div slot="modal-footer" class="w-100">
                            <b-btn size="sm" class="float-right" variant="primary" @click="onOk">Закрыть</b-btn>
                        </div>

                    </b-modal> -->

                    <!-- <input type="hidden" name="A" v-model="php">
                    <input type="hidden" name="B" v-model="phpS"> -->
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    // import clc_pr from '../store/calc_pr.js';
    // import clc_kp from '../store/calc_kp.js';
    import Multiselect from 'vue-multiselect'

    export default {
        components: {
            Multiselect
        },
        data() {
            return {

                plats: [{
                        plt: 'GSM-модем',
                        lib: 'gsm'
                    },
                    {
                        plt: 'USBA',
                        lib: 'usba'
                    }
                ],

                options: [{
                        plt: 'GSM-модем',
                        lib: 'gsm'
                    },
                    {
                        plt: 'USBA',
                        lib: 'usba'
                    },
                    {
                        plt: 'Ethernet ПРС-802',
                        lib: 'prs802'
                    },
                    {
                        plt: 'RS485E',
                        lib: 'rs485'
                    },
                ],
                regions: [{
                        text: 'Без климатологии',
                        value: '0'
                    },
                    {
                        text: 'Алтайский край',
                        value: '1'
                    },
                    {
                        text: 'Амурская область',
                        value: '2'
                    },
                    {
                        text: 'Архангельская область',
                        value: '3'
                    },
                    {
                        text: 'Астраханская область',
                        value: '4'
                    },
                    {
                        text: 'Белгородская область',
                        value: '5'
                    },
                    {
                        text: 'Брянская область',
                        value: '6'
                    },
                    {
                        text: 'Владимирская область',
                        value: '7'
                    },
                    {
                        text: 'Волгоградская область',
                        value: '8'
                    },
                    {
                        text: 'Вологодская область',
                        value: '9'
                    },
                    {
                        text: 'Воронежская область',
                        value: '10'
                    },
                    {
                        text: 'Ивановская область',
                        value: '11'
                    },
                    {
                        text: 'Иркутская область',
                        value: '12'
                    },
                    {
                        text: 'Кабардино- Балкарская Республика',
                        value: '13'
                    },
                    {
                        text: 'Калининградская область',
                        value: '14'
                    },
                    {
                        text: 'Калужская область',
                        value: '15'
                    },
                    {
                        text: 'Камчатская область',
                        value: '16'
                    },
                    {
                        text: 'Карачаево-Черкесская Республика',
                        value: '17'
                    },
                    {
                        text: 'Кемеровская область',
                        value: '18'
                    },
                    {
                        text: 'Кировская область',
                        value: '19'
                    },
                    {
                        text: 'Костромская область',
                        value: '20'
                    },
                    {
                        text: 'Краснодарский край',
                        value: '21'
                    },
                    {
                        text: 'Красноярский край',
                        value: '22'
                    },
                    {
                        text: 'Курганская область',
                        value: '23'
                    },
                    {
                        text: 'Курская область',
                        value: '24'
                    },
                    {
                        text: 'Ленинградская область',
                        value: '25'
                    },
                    {
                        text: 'Липецкая область',
                        value: '26'
                    },
                    {
                        text: 'Магаданская область',
                        value: '27'
                    },
                    {
                        text: 'Московская область',
                        value: '28'
                    },
                    {
                        text: 'Мурманская область',
                        value: '29'
                    },
                    {
                        text: 'Ненецкий АО  (Архангельская область)',
                        value: '30'
                    },
                    {
                        text: 'Нижегородская область',
                        value: '31'
                    },
                    {
                        text: 'Новгородская область',
                        value: '32'
                    },
                    {
                        text: 'Новосибирская область',
                        value: '33'
                    },
                    {
                        text: 'Омская область',
                        value: '34'
                    },
                    {
                        text: 'Оренбургская область',
                        value: '35'
                    },
                    {
                        text: 'Орловская область',
                        value: '36'
                    },
                    {
                        text: 'Пензенская область',
                        value: '37'
                    },
                    {
                        text: 'Пермская область',
                        value: '38'
                    },
                    {
                        text: 'Приморский край',
                        value: '39'
                    },
                    {
                        text: 'Псковская область',
                        value: '40'
                    },
                    {
                        text: 'Республика Адыгея',
                        value: '41'
                    },
                    {
                        text: 'Республика Алтай',
                        value: '42'
                    },
                    {
                        text: 'Республика Башкортостан',
                        value: '43'
                    },
                    {
                        text: 'Республика Бурятия',
                        value: '44'
                    },
                    {
                        text: 'Республика Дагестан',
                        value: '45'
                    },
                    {
                        text: 'Республика Калмыкия',
                        value: '46'
                    },
                    {
                        text: 'Республика Карелия',
                        value: '47'
                    },
                    {
                        text: 'Республика Коми',
                        value: '48'
                    },
                    {
                        text: 'Республика Марий Эл',
                        value: '49'
                    },
                    {
                        text: 'Республика Мордовия',
                        value: '50'
                    },
                    {
                        text: 'Республика Саха (Якутия)',
                        value: '51'
                    },
                    {
                        text: 'Республика Северная Осетия - Алания',
                        value: '52'
                    },
                    {
                        text: 'Республика Татарстан',
                        value: '53'
                    },
                    {
                        text: 'Республика Тыва',
                        value: '54'
                    },
                    {
                        text: 'Республика Хакассия',
                        value: '55'
                    },
                    {
                        text: 'Ростовская область',
                        value: '56'
                    },
                    {
                        text: 'Рязанская область',
                        value: '57'
                    },
                    {
                        text: 'Самарская область',
                        value: '58'
                    },
                    {
                        text: 'Саратовская область',
                        value: '59'
                    },
                    {
                        text: 'Сахалинская область',
                        value: '60'
                    },
                    {
                        text: 'Свердловская область',
                        value: '61'
                    },
                    {
                        text: 'Смоленская область',
                        value: '62'
                    },
                    {
                        text: 'Ставропольский край',
                        value: '63'
                    },
                    {
                        text: 'Тамбовская область',
                        value: '64'
                    },
                    {
                        text: 'Тверская область',
                        value: '65'
                    },
                    {
                        text: 'Томская область',
                        value: '66'
                    },
                    {
                        text: 'Тульская область',
                        value: '67'
                    },
                    {
                        text: 'Тюменская область',
                        value: '68'
                    },
                    {
                        text: 'Удмуртская Республика',
                        value: '69'
                    },
                    {
                        text: 'Ульяновская область',
                        value: '70'
                    },
                    {
                        text: 'Хабаровский край',
                        value: '71'
                    },
                    {
                        text: 'Челябинская область',
                        value: '72'
                    },
                    {
                        text: 'Чеченская Республика',
                        value: '73'
                    },
                    {
                        text: 'Читинская область',
                        value: '74'
                    },
                    {
                        text: 'Чувашская Республика',
                        value: '75'
                    },
                    {
                        text: 'Чукотский АО (Магаданская область)',
                        value: '76'
                    },
                    {
                        text: 'Ярославская область',
                        value: '77'
                    },
                    {
                        text: 'Республика Крым',
                        value: '78'
                    }
                ],
                info: 'Параметры ЦО',
                ro: true,
                fo: false,
                infg: 'Параметры ГВС',
                rg: true,
                fg: false,
                im4: true,
                top: '',
                show: false,
                stup:false,
                stup4:false,
                otklFormatSPL: true,
                otklFormatPrSx: true,
                file: null,
            }
        },
        computed: {

            isx() { return this.$store.getters.getisxcalc; },
            rescalc() {  return this.$store.getters.getrescalc },
            sb() { return this.$store.getters.getSbKp  },

            optionso() {
                let opt = [];
                opt = [{
                        text: 'нет',
                        value: '0'
                    },
                    {
                        text: '15',
                        value: '15'
                    },
                    {
                        text: '25',
                        value: '25'
                    },
                    {
                        text: '32',
                        value: '32'
                    },
                    {
                        text: '40',
                        value: '40'
                    },
                    {
                        text: '50',
                        value: '50'
                    },
                    {
                        text: '65',
                        value: '65'
                    },
                    {
                        text: '80',
                        value: '80'
                    },
                    {
                        text: '100',
                        value: '100'
                    },
                    {
                        text: '150',
                        value: '150'
                    },
                    {
                        text: '200',
                        value: '200'
                    },
                    {
                        text: '300',
                        value: '300'
                    }
                ]
                return opt;
            },

            popup() {
                return {
                    qm:'Qмакс = Qср * Kчн',
                    qs:'Qср = Qмакс / Kчн',
                    kc:'коэффициент часовой неравномерности <br> Kчн = Qмакс / Qср',
                    r:'Данный параметр необходим для подбора датчиков температуры.<br> При Ду ИМ менее 50, датчики устанавливаются в расширение Ду65.',
                    s:'Скорость потока в ИМ больше 1,5 м/с,',
                    d:'диап. Ду ИМ И6: 25 - 80',
                    m:'диап. Ду ИМ для модифиц. линий: 32 - 80'
                }
            },

        },
        


    }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>