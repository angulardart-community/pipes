import 'package:angular2/angular2.dart';
import 'heroes.dart';

@Pipe(name: 'flyingHeroes')
class FlyingHeroesPipe extends PipeTransform {
  List<Hero> transform(List<Hero> value) =>
      value.where((hero) => hero.canFly).toList();
}

// Identical except for the pure flag
@Pipe(name: 'flyingHeroes', pure: false)
class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}
