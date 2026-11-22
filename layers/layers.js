ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.725721, -3.039445, 104.774536, -3.004453]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> ALANG-ALANGLEBAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> BANYUASIN SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> BUKITKECIL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> GANDUS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> ILIRBARAT DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> ILIRBARAT SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> ILIRTIMUR DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> ILIRTIMUR SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> INDRALAYA UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> KALIDONI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> KEMUNING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> KERTAPATI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> PEMULUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> PLAJU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> RAMBUTAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> RANTAUBAYUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> SAKO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> SEBERANGULU DUA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> SEBERANGULU SATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> SEMATANGBORANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> SEMBAWA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_21.png" /> SUKARAMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_22.png" /> TALANGKELAPA<br />' });
var format_STASIUNKA_PT_50K_2 = new ol.format.GeoJSON();
var features_STASIUNKA_PT_50K_2 = format_STASIUNKA_PT_50K_2.readFeatures(json_STASIUNKA_PT_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_STASIUNKA_PT_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STASIUNKA_PT_50K_2.addFeatures(features_STASIUNKA_PT_50K_2);
var lyr_STASIUNKA_PT_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STASIUNKA_PT_50K_2, 
                style: style_STASIUNKA_PT_50K_2,
                popuplayertitle: 'STASIUNKA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/STASIUNKA_PT_50K_2.png" /> STASIUNKA_PT_50K'
            });
var format_RELKA_LN_50K_3 = new ol.format.GeoJSON();
var features_RELKA_LN_50K_3 = format_RELKA_LN_50K_3.readFeatures(json_RELKA_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RELKA_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RELKA_LN_50K_3.addFeatures(features_RELKA_LN_50K_3);
var lyr_RELKA_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RELKA_LN_50K_3, 
                style: style_RELKA_LN_50K_3,
                popuplayertitle: 'RELKA_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/RELKA_LN_50K_3.png" /> RELKA_LN_50K'
            });
var format_JALAN_LN_50K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_4 = format_JALAN_LN_50K_4.readFeatures(json_JALAN_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_4.addFeatures(features_JALAN_LN_50K_4);
var lyr_JALAN_LN_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_4, 
                style: style_JALAN_LN_50K_4,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_4.png" /> JALAN_LN_50K'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_STASIUNKA_PT_50K_2.setVisible(true);lyr_RELKA_LN_50K_3.setVisible(true);lyr_JALAN_LN_50K_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_STASIUNKA_PT_50K_2,lyr_RELKA_LN_50K_3,lyr_JALAN_LN_50K_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_STASIUNKA_PT_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSSTA': 'FGSSTA', 'KLSSTA': 'KLSSTA', 'FCODE': 'FCODE', 'KODKOD': 'KODKOD', 'WILSTA': 'WILSTA', 'DOPSTA': 'DOPSTA', 'KMTSTA': 'KMTSTA', 'LINSTA': 'LINSTA', 'KONKON': 'KONKON', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'Gambar': 'Gambar', });
lyr_RELKA_LN_50K_3.set('fieldAliases', {'FCODE': 'FCODE', 'TIPREL': 'TIPREL', 'JMLREL': 'JMLREL', 'KMXREL': 'KMXREL', 'KLSREL': 'KLSREL', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_STASIUNKA_PT_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSSTA': 'TextEdit', 'KLSSTA': 'TextEdit', 'FCODE': 'TextEdit', 'KODKOD': 'TextEdit', 'WILSTA': 'TextEdit', 'DOPSTA': 'TextEdit', 'KMTSTA': 'TextEdit', 'LINSTA': 'TextEdit', 'KONKON': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_RELKA_LN_50K_3.set('fieldImages', {'FCODE': 'TextEdit', 'TIPREL': 'TextEdit', 'JMLREL': 'TextEdit', 'KMXREL': 'TextEdit', 'KLSREL': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_50K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_STASIUNKA_PT_50K_2.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'FGSSTA': 'no label', 'KLSSTA': 'no label', 'FCODE': 'no label', 'KODKOD': 'no label', 'WILSTA': 'no label', 'DOPSTA': 'no label', 'KMTSTA': 'no label', 'LINSTA': 'no label', 'KONKON': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'Gambar': 'inline label - always visible', });
lyr_RELKA_LN_50K_3.set('fieldLabels', {'FCODE': 'no label', 'TIPREL': 'no label', 'JMLREL': 'no label', 'KMXREL': 'no label', 'KLSREL': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});