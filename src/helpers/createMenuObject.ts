type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObjective = (activeMenu : MenuOptions) => {
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    };

    if(activeMenu !== ''){
       returnObject[activeMenu] = true
    }

   return returnObject;
}