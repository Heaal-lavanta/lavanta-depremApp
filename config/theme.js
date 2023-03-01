import blackmap from '../src/map/blackmap.json'
import lightmap from '../src/map/lightmap.json'

const theme = {
    light : {
        theme : "light",
        backgroundColor : "#fff",
        textColor : "#131214",
        settingsHeaderLineBackground : "#f5f5f5",
        settingsHeaderLineText : "#9b9b9b",
        navbarInactıve : "#666",
        listItemDetailText : "#555",
        swiperImageBackground: "#000000aa",
        swiperTextColor : "#f2f1f3",
        newsInfoDateColor : "#333",
        newsDescriptionColor : "#444",
        customMapStyle : lightmap,
    },
    dark : {
        theme : "dark",
        backgroundColor : "#191627",
        textColor : "#f2f1f3",
        swiperTextColor : "#f2f1f3",
        settingsHeaderLineBackground : "#211d35",
        settingsHeaderLineText : "#ddd",
        navbarInactıve : "#666278",
        listItemDetailText : "#ccc",
        newsInfoDateColor : "#dcdcdc",
        newsDescriptionColor : "#ddd",
        swiperImageBackground: "#000000aa",
        customMapStyle : blackmap,
    }
}

export default theme;