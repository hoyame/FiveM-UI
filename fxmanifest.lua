fx_version 'adamant'
game { 'gta5' }
lua54 'yes'

ui_page 'dist/index.html'

files {
	'dist/*.ttf',
	'dist/*.otf',
	'dist/*.js',
	'dist/*.html',
} 


client_scripts {
    "client/*.lua",
}

escrow_ignore {
	'client/cl_bank.lua',
	'client/cl_call.lua',
	'client/cl_core.lua',
	'client/cl_hud.lua',
	'client/cl_inventory.lua'
}