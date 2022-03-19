print("start")

-- local showMenu = false

-- Citizen.CreateThread(function() 
--     while true do 
--         Wait(1)

--         if IsControlPressed(0, 51) then
--             print("zeboub")
--             SetNuiFocus(true, true)
--             showMenu = true
            

--             while showMenu do Citizen.Wait(100) end

       
--         end
--     end
-- end)

-- Citizen.CreateThread(function() 
--     while true do 
--         Wait(1)

--         if IsControlReleased(0, 51) then
--             print("zboubi")
--             SetNuiFocus(false, false)
--             showMenu = false         
--         end
--     end
-- end)


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