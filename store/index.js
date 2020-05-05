export const state = () => ({
    lang: "zh"
});
export const mutations = {
    changeLang(state,lang){
        console.log(lang)
        state.lang=lang
    }
}