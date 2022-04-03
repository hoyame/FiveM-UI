
  
-------------------------------------------------------------------------------

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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- add data on start


RegisterCommand("notif", function()
    SendMessage('notification', {
        id = 0,
        title = "Zemel",
        message = "Grosse araignée",
        subtitle = "Sous-titre"
    })
end)
RegisterCommand("profile", function()
    SendMessage('profile-data', {
        name = "Yungiza",
        nickName = "Jezzier",
        img = "https://avatars.githubusercontent.com/u/56686012?v=4",
        jobNameCase = "Job",
        job = "Police",
        gradeNameCase = "Grade",
        grade = "Officier",
        crewNameCase = "Crew",
        crew = "Vagos",
        food = 40, -- %
        water = 60, -- %
    })
end)

function setAutoProfile()
    SendMessage('profile-data', {
        name = "Yungiza",
        nickName = "Jezzier",
        img = "https://avatars.githubusercontent.com/u/56686012?v=4",
        jobNameCase = "Job",
        job = "Police",
        gradeNameCase = "Grade",
        grade = "Officier",
        crewNameCase = "Crew",
        crew = "Vagos",
        food = 40, -- %
        water = 60, -- %
    })
end


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- RegisterNUICallback('getClientData', function(data, cb)
--     print('data', json.encode(data))
--     -- write your function here
  
-- end)

