if [[ -d lib/pngs ]]
then
    rm -rf lib/pngs   
fi

mkdir lib/pngs
touch lib/pngs/index.js


cd assets/originals

for i in *.svg;do
    echo converting $i;
    name=`echo $i | awk '{ print toupper( substr( $0, 1, 1 ) ) substr( $0, 2 ); }'`;
    line=`echo export { default as ${name%.*} } from \'./${i%.*}.png\'\;`
    echo $line >> ../../lib/pngs/index.js
    rsvg-convert -h 100 -o ${i%.*}.png $i
    mv ${i%.*}.png ../../lib/pngs
done


cd ../../assets/overrides

for i in *.svg;do
    echo converting $i;
    name=`echo $i | awk '{ print toupper( substr( $0, 1, 1 ) ) substr( $0, 2 ); }'`;
    line=`echo export { default as ${name%.*} } from \'./${i%.*}.png\'\;`
    echo $line >> ../../lib/pngs/index.js
    rsvg-convert -h 100 -o ${i%.*}.png $i
    mv ${i%.*}.png ../../lib/pngs
done


cd ../..
