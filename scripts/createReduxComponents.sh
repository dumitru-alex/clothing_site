#assign vars
component_dir=./src/redux/$1
component_reducer=$component_dir/$1.reducer.js
component_actions=$component_dir/$1.actions.js
component_types=$component_dir/$1.types.js

#create dir
mkdir $component_dir
#create files
touch $component_reducer
touch $component_actions
touch $component_types
#update jsx file with basic imports
# echo 'import React from "react";' > $component_file
# echo "" >> $component_file
# echo 'import "./'$1'.styles.scss";' >> $component_file

#TODO: add conditional processing to check if folder and files exit