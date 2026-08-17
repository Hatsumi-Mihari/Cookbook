# E-book of recipes (Based on my experience working in the kitchen)
This is an e-book of recipes; the main slogan of this project is “Every recipe is always at your fingertips.”
<img width="1279" height="857" alt="Screenshot 2026-08-18 at 00 59 06" src="https://github.com/user-attachments/assets/1ebff6ec-d5fa-450a-af37-726e19ccdc10" />


# About the Project
The MVP phase is currently nearing completion. This segment includes. 
- Working version of the graphical user interface
- Pre-defined data structures for future storage in the database and local storage
- Page navigation
- Basic timer functionality
- Global indexed search by (categories, ingredients, dishes)

# What's ready so far
- Screens for categories, dishes, and recipe cards
- Navigation
- Modal windows, search, and timers
- Drop-down list in the website header
- Data storage and search structures
- Timer management

# In Progress 
- Development of a search algorithm 
- Fixing bugs in navigation
- Fixing bugs related to the drop-down list

# Future Direction of Development 
- Build a backend using Java Spring Boot, or use a ready-made Supabase-based tool for quick testing
- Packaging the first release version in Docker, with the frontend and backend packaged separately
- Tracking data (such as battery level and network connect) on the client side of the host device
- Switching Locations
- Creating sections with additional client settings
- Keep a local copy of the recipes; if an update is available, update only the part of the database that has changed, or upon the user's request if the file is too large.
