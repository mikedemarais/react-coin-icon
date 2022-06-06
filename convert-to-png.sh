if [[ -d lib/pngs ]]
then
    rm -rf lib/pngs   
fi

mkdir lib/pngs


cd assets/originals

for i in *.svg;do
    echo converting $i;
    rsvg-convert -h 100 -o ${i%.*}.png $i
    mv ${i%.*}.png ../../lib/pngs
done


cd ../../assets/overrides

for i in *.svg;do
    echo converting $i;
    rsvg-convert -h 100 -o ${i%.*}.png $i
    mv ${i%.*}.png ../../lib/pngs
done


cd ../..
