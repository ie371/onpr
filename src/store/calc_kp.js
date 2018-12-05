function zeroc(d) {
    switch(d){
        case 't1':
        var objot = {
            OT:{},
            gdr1:{ Gv:'',  V:'', du_im:0 },
            gdr2:{ Gv:'',  V:'', du_im:0 },
            gdr9:{ Gv:'',  V:'', du_im:0 },
    }
        break;
        case 't3':

        var objot = {
            Ggvs:{},
            gdr3:{ Gv:'',  V:'', du_im:0 },
            gdr4:{ Gv:'',  V:'', du_im:0 },
            }
        break;

    }

return objot
}


function podborR( Gv, sk) {
    var THRESHOLD = sk;
    var d_arr = [];
    var v_arr = [];
    var du = [ 15, 25, 32, 40, 50, 65, 80, 100, 150, 200, 300 ];

     du.forEach(function (el) {
        var a1 = Math.pow(el*0.001, 2)/4;
        var vs = Gv*1/((3.14*a1))/3600;
            if (vs.toFixed(2) <= +THRESHOLD) {
                    d_arr.push(el);
                    v_arr.push(vs.toFixed(2));
                } 
    });

    if  (d_arr.length == 0) {

        var eel =  du[du.length - 1];
        var a2 = Math.pow(eel*0.001, 2)/4;
        var vs2 = Gv*1/((3.14*a2))/3600;
        d_arr.push(eel);
        v_arr.push(vs2.toFixed(2));
        } 

    return { 
            Gv:  Gv,
            V:v_arr[0], 
            du_im:d_arr[0] 
            };

}
function speed(R, d, dd) {

    switch(d){
        case 't1':
        var a1 = Math.pow(dd*0.001, 2)/4;
        var V = (R*1/((3.14*a1))/3600).toFixed(2);
        var OT = {}
        var gdr1 = { Gv: R,  V:V,  du_im:dd };
        var gdr2 = gdr1;
        var gdr9 = gdr1;

        var objot = {
                OT:OT,
                gdr1:gdr1,
                gdr2:gdr2,
                gdr9:gdr9,
            }
        break;
        case 't3':
        var R4 = (R*0.4).toFixed(3)
        var a1 = Math.pow(dd*0.001, 2)/4;
        var V = (R*1/((3.14*a1))/3600).toFixed(2);
        var V4 = (R4*1/((3.14*a1))/3600).toFixed(2);
        var Ggvs = {}
        var gdr3 = { Gv: R,  V:V,  du_im:dd };
        var gdr4 = { Gv: R4,  V:V4,  du_im:dd };


        var objot = {
            gdr3:gdr3,
            gdr4:gdr4,
            Ggvs:Ggvs
            } 
        break;
        case 't4':
        // var R4 = (R*0.4).toFixed(3)
        var a1 = Math.pow(dd*0.001, 2)/4;
        var V = (R*1/((3.14*a1))/3600).toFixed(2);
        // var V4 = (R4*1/((3.14*a1))/3600).toFixed(2);
        var Ggvs = {}
        // var gdr3 = { Gv: R,  V:V,  du_im:dd };
        var gdr4 = { Gv: R4,  V:V4,  du_im:dd };


        var objot = {
            gdr3:gdr3,
            gdr4:gdr4,
            Ggvs:Ggvs
            } 
        break;

    }
return objot
}

function kp( R, sk, d) {

        switch(d){
            case 't1':
                var OT = {}
                var gdr1 = podborR( R, sk );
                var gdr2 = gdr1;
                var gdr9 = podborR( R*0.4, sk );
                var objot = {
                        OT:OT,
                        gdr1:gdr1,
                        gdr2:gdr2,
                        gdr9:gdr9,
                    }
            break;
            case 't3':
            var R4 = (R*0.4).toFixed(3)
            var Ggvs = {}
            var gdr3 = podborR( R, sk );
            var gdr4 = podborR( R4, sk );

            var objgvs = {
                    Ggvs:Ggvs,
                    gdr3:gdr3,
                    gdr4:gdr4,
                }
            break;

        }
 var resu = Object.assign({}, objot, objgvs);

return objot;
}

function calc(R, sk, d, m, dd, zero) {

if(zero==='zero'){
    var result = zeroc(d)

} else{
        if(m==='peres'){
            var result = speed(R, d, dd)
        } else {
            var result = kp(R, sk, d)
        } 
    }  
return result;
} 

export default calc;
