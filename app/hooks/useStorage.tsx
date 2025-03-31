import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key: string) => {
        try{
            const password = await AsyncStorage.getItem(key)
            return password ? JSON.parse(password) : [];
            
        }catch(err){
            console.log('Erro ao buscar');
            return [];
        }
    }

    const saveItem = async (key: string, value: string) => {
        try{
            const password = await getItem(key)
            password.push(value)  
            
            await AsyncStorage.setItem(key, JSON.stringify(password))
        }catch(err){
            console.log('Erro ao salvar');
            return [];
        }
    }

    const removeItem = async (key: string, item: string) => {
        try{
            const passwords = await getItem(key)
            let myPassword = passwords.filter( (password: string) => {
                return(password !== item)
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPassword))
            
        }catch(err){
            console.log('Erro ao remover');
            return [];
        }
    }

    return{
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;