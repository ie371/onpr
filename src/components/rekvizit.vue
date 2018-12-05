<template>
<div class='form-group'> 
<div class="form-row">
<div class='col-md-4'>

<!-- <h6><span class="badge">Реквизиты проекта</span></h6> -->
<div class="text-center"> <h5><span  class="badge">Реквизиты проекта</span></h5> </div>

    <label class='col-form-label'>Название проекта</label>
    <input type='text' class='form-control form-control-sm' placeholder='Узел коммерческого учёта тепловой энергии, теплоносителя' id='name_prj' name='name_prj' list='name_prj_list' v-model="isx.nazvPR">
        <datalist id='name_prj_list'>
            <option>Узел коммерческого учёта тепловой энергии, теплоносителя</option>
            <option>Узел технологического учёта тепловой энергии, теплоносителя</option>
        </datalist>

    <label class='col-form-label'>Шифр</label>
    <input type='text' class='form-control form-control-sm' placeholder='шифр' name='cod' v-model="isx.cod" >

    <label class='col-form-label'>Название проектной организации</label>
    <input type='text' class='form-control form-control-sm' name='name_ooo' v-model="isx.nazvPrO">

    <label class='col-form-label'>ГИП</label>
    <input type='text' class='form-control form-control-sm' name='GIP' v-model="isx.GIP">

    <label class='col-form-label'>Разработал</label>
    <input type='text' class='form-control form-control-sm' name='razr' v-model="isx.razrab">

    <label class='col-form-label'>Проверил</label>
    <input type='text' class='form-control form-control-sm' name='prov' v-model="isx.prov">

    <label class='col-form-label'>Технический контролер</label>
    <input type='text' class='form-control form-control-sm' name='tcontr' v-model="isx.tcontr">

    <label class='col-form-label'>Нормоконтролер</label>
    <input type='text' class='form-control form-control-sm' name='ncontr' v-model="isx.ncontr">
</div>


<div class='col-md-5'>
<!-- <h6><span class="badge">Реквизиты объекта</span></h6> -->
<div class="text-center"> <h5><span  class="badge">Реквизиты объекта</span></h5> </div>

    <label class='col-form-label'>Адрес</label>
    <input type='text' class='form-control form-control-sm' name='adress' placeholder='140180, Московская область, г. Жуковский, ул. Энергетическая, д. 15' v-model="isx.adress">

    <label class='col-form-label'>Тип объекта</label>
    <input type='text' class='form-control form-control-sm' placeholder='Многоквартирный жилой дом' name='tip_obj'  list='tip_obj_list' v-model="isx.tipObj">
        <datalist id='tip_obj_list'>
            <option>Многоквартирный жилой дом</option>
            <option>Школа</option>
            <option>Детский сад</option>  
            <option>Административное здание</option> 
        </datalist>

    <label class='col-form-label'>Заказчик</label>
    <input type='text' class='form-control form-control-sm' placeholder='Заказчик' name='zakazchik'  v-model="isx.zakazc">


    
    <label class='col-form-label'>Абонент</label>
    <input type='text' class='form-control form-control-sm' placeholder='Абонент' name='abonent' v-model="isx.abon">

    <label class='col-form-label'>Источник теплоснабжения</label>
    <input type='text' class='form-control form-control-sm' placeholder='Источник теплоснабжения' name='istochnik'  v-model="isx.istT">

    <label class='col-form-label'>Ресурсоснабжающая компания</label>
    <input type='text' class='form-control form-control-sm' placeholder='Ресурсоснабжающая компания' name='resurscomp' v-model="isx.resK">


<hr>
  <div class='form-group'>
    <b-form-checkbox v-model="status"
                     value="accepted"
                     unchecked-value="not_accepted"
                     name="checkTiul">
      Печатать титульный лист
    </b-form-checkbox>
    </div>



</div>


<div class='col-md-3'>

</div>

</div>
</div>
</template>


<script>
export default {
    data() {
        return {

            status: 'accepted'
        }
    },

    computed: {
        isx(){ return this.$store.getters.getRekv },
        },
}
</script>