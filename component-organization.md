# Component Organization

## Goal
  - To remove the following folders from the ui/ directory:
    - atoms/
    - molecules/
    - organisms/
  - To organize the components in the ui/ directory into the following folders, using Material UI mcp @mui-mcp as a reference:
    - inputs/  
    - surfaces/ 
    - layout/   
    - navigation/   
    - data-display/   
    - feedback/

## Implementation 
  - In src/ui/, create the new folderrs inputs/, surfaces/, layout/, navigation/, data-display/, and feedback/
  - Refer to the MUI documentatio @mui-mcp to observe how eah MUI component is categorized
  - Examine the currrrent ui/ directory to observe the current organization of components
  - Move each component as appropriate consistent with the MUI categorization
  - Update the import statements in the codebase to reflect the new component locations
  - delete empty folders atoms/, molecules/, and organisms/