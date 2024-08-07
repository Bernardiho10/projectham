# Compile TypeScript
./node_modules/.bin/tsc

# Copy directory recursively
Copy-Item -Path "node_modules\@boudev\magicui\" -Destination ".\assets\magicui" -Recurse -Force

# Run the build command
 ham build

# # Replace @boudev with /assets in all .js files within subdirectories
Get-ChildItem -Path "C:\Users\User\Desktop\youtube\project\assets\project\js" -Recurse -Filter "*.js" | ForEach-Object {
    (Get-Content $_.FullName) -replace '@boudev', '/assets' | Set-Content $_.FullName
}

# # Replace @boudev with /assets in all .js files within the directory
Get-ChildItem -Path "C:\Users\User\Desktop\youtube\project\assets\project\js" -Filter "*.js" | ForEach-Object {
    (Get-Content $_.FullName) -replace '@boudev', '/assets' | Set-Content $_.FullName
}

# Remove directories recursively
 Remove-Item -Path ".\assets\magicui" -Recurse -Force
 #Remove-Item -Path ".\hamout\assets\magicui" -Recurse -Force
