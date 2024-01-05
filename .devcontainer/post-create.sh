npm install
./node_modules/.bin/babel src --out-dir dist
cp -r ./src/db/ddl ./dist/db/ddl
cp -r ./src/db/populate ./dist/db/populate
node ./dist/db/init-db.js
