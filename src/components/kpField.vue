<template>

<div  class="container-fluid"> 
    <div class='col-md-6'>

        <div class="form-group">
            <label for="tkp">Шапка КП</label>
            <textarea class="form-control" 
            id="tkp"
            name="tkp" 
            rows="4"
            v-model="top"
            ></textarea>
        </div>

        <div class="form-group">
            <label for="bkp">Низ КП</label>
            <textarea class="form-control"
             id="bkp"
             name="bkp" 
             rows="4"
             v-model="bottom"
              ></textarea>
        </div>

    </div>  
</div>
</template>


<script>
export default {
    data() {
        return {
            top: 'Общество с ограниченной ответственностью «Интелприбор» (наукоград – г. Жуковский, Московская область) - более 10 лет уверенный лидер по производству электромагнитных полностью цифровых приборов учета тепловой энергии и теплоносителя – Теплосчетчика МКТС.',
            bottom: 'Общество с ограниченной ответственностью «Интелприбор» (наукоград – г. Жуковский, Московская область) - более 10 лет уверенный лидер по производству электромагнитных полностью цифровых приборов учета тепловой энергии и теплоносителя – Теплосчетчика МКТС.',
        }
    },
}
</script>