
# Remove Liquid Glass Agnostic and Cup Domain Specific UI Components

## Components to be removed

  - Container.tsx - Structural layout component with max-width constraints, no glass styling
  - Stack.tsx - Flexbox layout component, purely structural
  - AddIcon.tsx - SVG icon component, only uses basic icon styling
  - CameraAltIcon.tsx - SVG icon component
  - CloudUploadIcon.tsx - SVG icon component
  - DeleteIcon.tsx - SVG icon component
  - MoreVertIcon.tsx - SVG icon component
  - PhotoLibraryIcon.tsx - SVG icon component
  - CommentInput.tsx - Domain specific input component
  - Alert.tsx 
  - Collapsible.tsx
  - Tabs.tsx

## Remove Also
  - any module.css files that are no longer used after removing the above components
  - any css variables that are no longer used after removing the above components
  - any imports or exports from src/index.ts for the above components