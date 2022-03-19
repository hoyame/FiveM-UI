fx_version 'adamant'
game { 'gta5' }

ui_page 'dist/index.html'

files {
	'dist/*.ttf',
	'dist/*.otf',
	'dist/*.js',
	'dist/*.html',
} 


client_scripts {
    "cl_hud.lua",
}