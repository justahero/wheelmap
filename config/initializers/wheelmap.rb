WheelchairStatus = %w{yes limited no unknown}

Amenities = {
  :public_transfer => %w{subway aerodrome bicycle_rental bus_station bus_stop ferry ferry_terminal halt platform subway_entrance terminal tram_stop parking_aisle fuel parking car_rental car_sharing boatyard cable_car chair_lift},
  :food => %w{cafe pub restaurant fast_food drinking_water},
  :leisure => %w{cinema theatre zoo nightclub gallery arena},
  :money_post => %w{post_office atm bank bureau_de_change},
  :education => %w{college  library school university museum kindergarten},
  :shopping => %w{supermarket hairdresser clothes mall furniture electronics books beverages alcohol department_store shoes hardware garden_centre optician computer bakery laundry},
  :sport => %w{stadium sports_centre swimming_pool swimming},
  :tourism => %w{archaeological_site arts_centre artwork battlefield beacon theme_park attraction beach viewpoint tower memorial information cave_entrance castle},
  :accommodation => %w{chalet hostel hotel motel camp_site guest_house caravan_site bed_and_breakfast beach_resort},
  :misc => %w{place_of_worship hospital doctors pharmacy veterinary toilets},
  :government => %w{courthouse public_building townhall}
}

Tags = {
  :aerodrome => :aeroway,
  :alcohol => :shop,
  :archaeological_site => :historic,
  :arena => :leisure,
  :arts_centre => :amenity,
  :artwork => :amenity,
  :atm => :amenity,
  :attraction => :tourism,
  :bakery => :shop,
  :bank => :amenity,
  :battlefield => :historic,
  :beach => :natural,
  :beach_resort => :leisure,
  :beacon => :man_made,
  :bed_and_breakfast => :tourism,
  :beverages => :shop,
  :bicycle_rental => :amenity,
  :boatyard => :waterway,
  :books => :shop,
  :bureau_de_change => :amenity,
  :bus_station => :amenity,
  :bus_stop => :highway,
  :cable_car => :aerialway,
  :cafe => :amenity,
  :camp_site => :tourism,
  :caravan_site => :tourism,
  :car_rental => :amenity,
  :car_sharing => :amenity,
  :castle => :historic,
  :cave_entrance => :natural,
  :chair_lift => :aerialway,
  :chalet => :tourism,
  :cinema => :amenity,
  :clothes => :shop,
  :college => :amenity,
  :computer => :shop,
  :courthouse => :amenity,
  :department_store => :shop,
  :doctors => :amenity,
  :drinking_water => :amenity,
  :electronics => :shop,
  :fast_food => :amenity,
  :ferry => :route,
  :ferry_terminal => :amenity,
  :fuel => :amenity,
  :furniture => :shop,
  :gallery => :amenity,
  :garden_centre => :shop,
  :guest_house => :tourism,
  :hairdresser => :shop,
  :halt => :railway,
  :hardware => :shop,
  :hospital => :amenity,
  :hostel => :tourism,
  :hotel => :tourism,
  :information => :tourism,
  :kindergarten => :amenity,
  :laundry => :shop,
  :library => :amenity,
  :mall => :shop,
  :memorial => :historic,
  :motel => :tourism,
  :museum => :tourism,
  :nightclub => :amenity,
  :optician => :shop,
  :parking => :amenity,
  :parking_aisle => :amenity,
  :pharmacy => :shop,
  :place_of_worship => :amenity,
  :platform => :railway,
  :post_office => :amenity,
  :pub => :amenity,
  :public_building => :amenity,
  :restaurant => :amenity,
  :school => :amenity,
  :shoes => :shop,
  :sports_centre => :leisure,
  :stadium => :leisure,
  :subway => :railway,
  :subway_entrance => :railway,
  :supermarket => :shop,
  :swimming => :sport,
  :swimming_pool => :leisure,
  :terminal => :aeroway,
  :theatre => :amenity,
  :theme_park => :tourism,
  :toilets => :amenity,
  :tower => :power,
  :townhall => :amenity,
  :tram_stop => :railway,
  :university => :amenity,
  :veterinary => :amenity,
  :viewpoint => :tourism,
  :zoo => :tourism
}

Icons = {
  :arts_centre => 'palette',
  :atm => 'credit-cards',
  :audiologist => 'cross-small-white',
  :baby_hatch => 'cross-small-white',
  :bank => 'money-coin',
  :bar => 'glass',
  :bench => 'cross-small-white',
  :bicycle_parking => 'car',
  :bicycle_rental => 'car',
  :biergarten => 'weather',
  :brothel => 'cross-small-white',
  :bureau_de_change => 'bureau-de-change',
  :cafe => 'cake',
  :car_rental => 'car',
  :car_sharing => 'car',
  :cinema => 'film',
  :clock => 'clock-frame',
  :coast_guard => 'lifebuoy',
  :college => 'book-open',
  :community_centre => 'cross-small-white',
  :courthouse => 'auction-hammer-gavel',
  :crematorium => 'cross-small-white',
  :doctors => 'hospital',
  :drinking_water => 'cross-small-white',
  :embassy => 'bank',
  :emergency_phone => 'cross-small-white',
  :fast_food => 'fast-food',
  :fire_hydrant => 'fire',
  :fire_station => 'fire-station',
  :fountain => 'cross-small-white',
  :fuel => 'car',
  :grave_yard => 'cross-small-white',
  :grit_bin => 'cross-small-white',
  :hospital => 'hospital',
  :hunting_stand => 'target',
  :kindergarten => 'smiley',
  :zoo => 'smiley',
  :gallery => 'smiley',
  :library => 'book-open',
  :marketplace => 'shopping-basket',
  :milk_dispenser => 'cross-small-white',
  :nightclub => 'speaker',
  :parking => 'parking',
  :pharmacy => 'pharmacie-germany',
  :place_of_worship => 'bell',
  :police => 'police',
  :post_box => 'mail',
  :post_office => 'mail',
  :prison => 'user-thief-baldie',
  :pub => 'beer',
  :public_building => 'bank',
  :recycling => 'bin-full',
  :register_office => 'bank',
  :restaurant => 'cutlery',
  :sauna => 'cross-small-white',
  :school => 'book-open',
  :stripclub => 'cross-small-white',
  :studio => 'cross-small-white',
  :telephone => 'telephone',
  :theatre => 'mask',
  :toilets => 'toilet',
  :townhall => 'bank',
  :university => 'book-open',
  :vending_machine => 'cross-small-white',
  :veterinary => 'hospital',
  :waste_basket => 'bin-full',
  :waste_disposal => 'bin-full',
  :subway => 'car',
  :light_rail => 'car',
  :tram_stop => 'car',
  :bus_stop => 'car',
  :ferry_terminal => 'car',
  :taxi => 'car',
  :place_of_worship => 'bell',
  :supermarket => 'shopping-basket',
  :hairdresser => 'shopping-basket',
  :clothes => 'shopping-basket',
  :mall => 'shopping-basket',
  :furniture => 'shopping-basket',
  :electronics => 'shopping-basket',
  :books => 'shopping-basket',
  :beverages => 'shopping-basket',
  :alcohol => 'shopping-basket',
  :department_store => 'shopping-basket',
  :shoes => 'shopping-basket',
  :hardware => 'shopping-basket',
  :garden_centre => 'shopping-basket',
  :optician => 'glasses',
  :computer => 'shopping-basket',
  :bakery => 'shopping-basket',
  :hotel => 'building',
  :motel => 'building',
  :hostel => 'building',
  :chalet => 'building',
  :attraction => 'star',
  :memorial => 'star',
  :stadium => 'sport',
  :sports_centre => 'sport',
  :swimming_pool => 'sport',
  :swimming => 'sport',
  :museum => 'bank',
  :information => 'information',
  :viewpoint => 'camera'
}