
/**
 * @class ThreeJsRender
 */
class ThreeJsRender {
  static pluginName: string = 'ThreeJsRender';
  static installed: boolean = false;
  // this comes from the library 'Obiusm';
  static Obiusm:any;
  static install(Obiusm) {
    Obiusm.register('three',(obj:Object3D)=>{
    })
  }


}

export default ThreeJsRender;
