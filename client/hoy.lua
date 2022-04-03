AddEventHandler("onResourceStart", function(resourceName) 
    if resourceName ~= "hoyame_ui" then return end

    SendMessage('negozingoizngzongge1651gg1e3gs1g6g51s6gogn', 'ez54ge1g6531hez1h1h365zh6hgg')
    SendMessage('zg54z5g4z6g41z1g6z1zf16z5f165z1fz1f61zf61g', 'ewo3if9biuwe8bibge6iub4geggi')
    Wait(1500)
    SendMessage('5z56f165f161f65a16f6az1f6a16f161f6a1f6z1af', 'ei64ob4iu46dg34bfgbibgsd4bge')
    Wait(500)
    autoSetBank()
    setAutoProfile()
    setAutoInventory()
end)





RegisterNUICallback('blur', function(data, cb)
    TriggerScreenblurFadeIn(100)
    DisplayRadar(false)
end)

RegisterNUICallback('unblur', function(data, cb)
    TriggerScreenblurFadeOut(100)
    DisplayRadar(true)
end)

RegisterNUICallback('unfocus', function(data, cb)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('focus', function(data, cb)
    SetNuiFocus(true, true)
end)

RegisterCommand("focusNUIInv", function()
    SetNuiFocus(true, true)
    TriggerScreenblurFadeIn(100)
    DisplayRadar(false)
end)

RegisterCommand("focusNUI", function()
    SetNuiFocus(true, true)
end)

RegisterCommand("unfocusNUI", function()
    SetNuiFocus(false, false)
    TriggerScreenblurFadeOut(100)
    DisplayRadar(true)
end)