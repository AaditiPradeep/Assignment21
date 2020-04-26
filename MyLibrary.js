function hasDamage(object1,object2,object3){
  if (0.5*object1*object2*object2/object3.width*object3.width*object3.width > 10){
    return true;
    }
  else{
     return false;
   }
}