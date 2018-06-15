const value = "sdsd";
const ret = ( value === false ) ? '=false' :
                ( value ===  null ) ? '=null' :
                    ( value === undefined ) ? '=undefined' :
                        ( value === 0 ) ?  '=0' :
                            ( value === "" ) ?  '=""' :
                                ( value != value ) ? '=NaN' : '---' ;
console.log(ret);
