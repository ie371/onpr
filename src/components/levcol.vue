<template>

<div class='col-md-3'>

            <div class="text-center">
                <h5><span class="badge">Общие параметры </span></h5>
            </div>

            <div class="form-group">
                <div class='col'>
                    <h6><span class="badge"> Системный блок</span></h6>
                    <select class='form-control form-control-sm' v-model="sb.tipSB">
                        <option value='0'>СБ-04 с блоком бесперебойного питания</option>
                        <option value='1'>СБ-04 с сетевым питанием</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <div class='col'>
                    <h6><span class="badge">Платы расширения</span></h6>
                    <multiselect v-model="value" :options="options" :multiple="true" track-by="lib" :custom-label="customLabel"
                        placeholder="Платы расширения" :option-height="34">
                    </multiselect>
                </div>
            </div>

            <div class="form-group">
                <div class='col'>
                    <h6><span class="badge">Длина кабельных проводок</span></h6>
                    <div class='form-row'>

                        <div class='col'>
                            <label class='col-form-label'>от ВРУ до СБ</label>
                            <input type='text' class='form-control form-control-sm' v-model="sb.lvru">

                        </div>
                        <div class='col'>
                            <label class='col-form-label'>от СБ до ИМ</label>
                            <input type='text' class='form-control form-control-sm' v-model="sb.lsb">

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
                            <select class='form-control form-control-sm' v-on:change="nasp" v-model="isx.selReg" name='region'>
                                <option v-for="region in regions" v-bind:value="region.value" :key="region.key">
                                    {{ region.text }}
                                </option>
                            </select>
                        </div>

                        <div class='col'>
                            <label class='col-form-label'>Населенный пункт:</label>
                            <select class='form-control form-control-sm' v-model="isx.indexnas" :disabled=" isx.selReg == 0"
                                name='naspunkt'>
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
                    <h6><span class="badge">Ситуационный план</span></h6>
                    <label class='col-form-label'>Файл плана в формате JPG, PNG</label>
                    <input type="file" name="sitplan_uploads" accept="image/jpeg,image/png" style="font-size:0.8em;"
                        v-b-popover.hover.righttop="'Изображение в формате JPG или PNG с соотношением сторон 1,735 (Ш/В)'"
                        title="Ситуационный план">
                </div>
            </div>

        </div>
</template>


<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';

export default {

    components: {
            Multiselect,
        },

    data() {
        return{
                value: [{
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
        }
    },

    computed: {
        isx() {
                return this.$store.getters.getisxcalc;
        },
        sb() {
                return this.$store.getters.getSbKp;
        },
        },
    methods:{
        customLabel(option) {
                return ` ${option.plt}`
        },
        nasp() {
                if (this.isx.selReg != 0) {
                    this.mess = [];
                    let asd = [];

                    axios.post('./pdf/project/regions.php', {
                            sReg: this.isx.selReg
                        })
                        .then((response) => {
                            response.data.forEach((item) => {
                                asd.push({
                                    item
                                });
                            })
                            this.$store.dispatch('actnas', asd);
                        })

                        .catch(function (error) {
                            console.log(error);
                        });
                } else {
                    let asd = [];
                    this.$store.dispatch('actnas', asd);
                }
        },
    }
}
</script>