import os 

# import OS module

# Get the list of all files and directories
path = "ticket exchanger(ktxp)\SERVER\static\photos"
dir_list = os.listdir(path)
print("Files and directories in '", path, "' :")
# prints all files
print(dir_list)
